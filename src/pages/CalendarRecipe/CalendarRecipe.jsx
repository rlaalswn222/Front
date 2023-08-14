import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import * as S from './CalendarRecipe.styles';

import { addDietWithFavorite, getFavoritRecipe } from 'apis/request/recipe';
import Header from 'components/Header/Header';
import RecipeBlock from 'components/RecipeBlock/RecipeBlock';

const CalendarRecipe = () => {
  const [selected, setSelected] = useState(-1);
  const [date, setDate] = useState('');
  const [mealTime, setMealTime] = useState(0);

  const [searchParams, _] = useSearchParams();
  const navigate = useNavigate();
  const { data: result } = useQuery(['chooseFavorit'], () =>
    getFavoritRecipe(),
  );

  useEffect(() => {
    if (!searchParams.has('date')) navigate(-1);
    const [year, month, day, time] = searchParams.get('date').split('-');
    setDate(`${year}-${month}-${day}`);
    setMealTime(Number(time));
  }, []);

  const selectRecipe = (id) => () => {
    if (id === selected) {
      setSelected(-1);
      return;
    }
    setSelected(id);
  };

  const submit = () => {
    addDietWithFavorite(date, { meal_time: mealTime, recipe: selected })
      .then(() => {
        alert('등록되었습니다');
        navigate(-1);
      })
      .catch(() => {
        alert('오류가 발생했습니다. 다시 시도해주세요');
      });
  };
  return (
    <S.Container>
      <Header>찜한 레시피에서 선택하기</Header>
      <S.RecipeList>
        {result &&
          result.data.result.map((recipe) => (
            <S.BlockBox
              key={`${recipe.recipe_id}-recipe`}
              selected={selected === recipe.recipe_id}
              onClick={selectRecipe(recipe.recipe_id)}
            >
              <RecipeBlock recipe={recipe} mode={'select'} />
            </S.BlockBox>
          ))}
      </S.RecipeList>
      <S.Btn
        onClick={selected !== -1 ? submit : null}
        selected={selected !== -1}
      >
        저장하기
      </S.Btn>
    </S.Container>
  );
};

export default CalendarRecipe;
