import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './MenuRecipe.styled';

import { addFavoriteRecipe, deleteFavoriteRecipe } from 'apis/request/recipe';

import { ReactComponent as ShareIcon } from 'assets/DetailrecipeShareIcon.svg';
import { ReactComponent as BookmarkIcon } from 'assets/DetailrecipeSaveIcon.svg';
import { ReactComponent as BookmarkBasicIcon } from 'assets/DetailrecipeSaveDelete.svg';
import { ReactComponent as DifficultyIcon } from 'assets/DetailrecipeDifficultyIcon.svg';
import { ReactComponent as ServingIcon } from 'assets/DetailrecipeServingsIcon.svg';
import { ReactComponent as TimeIcon } from 'assets/DetailrecipeTimeIcon.svg';

const MenuRecipe = (props) => {
  const { recipe } = props;
  console.log(recipe);
  const { id } = useParams();
  const currentURL = window.location.href;
  const [favorite, setFavorite] = useState(false);

  const handleShare = (e) => {
    e.preventDefault();
    const shareObject = {
      title: recipe[0]?.recipe_name,
      url: currentURL,
      text: recipe[0]?.summary,
    };
    console.log(shareObject);
    if (navigator.share) {
      navigator
        .share(shareObject)
        .then(() => {
          alert('공유 성공');
        })
        .catch((e) => {
          alert('공유하기가 정상적으로 작동하지 않았습니다.');
        });
    } else {
      alert('공유하기를 지원하지 않는 브라우저 환경입니다.');
    }
  };

  const handleFavorite = (e) => {
    e.preventDefault();
    if (favorite === false) {
      addFavoriteRecipe(id)
        .then((res) => {
          console.log(res);
          if (!res.data.isSuccess) throw res.data.message;
          else {
            alert('찜하기 성공');
            setFavorite(true);
          }
        })
        .catch((e) => alert(e));
    } else {
      deleteFavoriteRecipe(id).then((response) => console.log(response));
      setFavorite(false);
    }
  };

  return (
    <S.Wrapper>
      <S.MenuImage src={recipe[0]?.img_url} />
      <S.NameDescriptionContainer>
        <S.MenuName>{recipe[0]?.recipe_name}</S.MenuName>
        <S.MenuDescription>{recipe[0]?.summary}</S.MenuDescription>
      </S.NameDescriptionContainer>
      <S.ProfileAddOnContainer>
        <S.ProfileContainer>
          <S.ProfileImage src={recipe[0]?.user_img_url} />
          <S.ProfileName>{recipe[0]?.nickname}</S.ProfileName>
        </S.ProfileContainer>
        <S.AddOnContainer>
          <S.BookMark onClick={handleFavorite}>
            {favorite ? <BookmarkIcon /> : <BookmarkBasicIcon />}
          </S.BookMark>
          <S.Share>
            <ShareIcon onClick={handleShare} />
          </S.Share>
        </S.AddOnContainer>
      </S.ProfileAddOnContainer>
      <S.SubDetailContainer>
        <S.TimeContainer>
          <TimeIcon width="40" height="40" />
          <p>{recipe[0]?.cook_time}분</p>
        </S.TimeContainer>
        <S.DifficultyContainer>
          <DifficultyIcon width="40" height="40" />
          <p>{recipe[0]?.difficulty}</p>
        </S.DifficultyContainer>
        <S.ServingContainer>
          <ServingIcon width="40" height="40" />
          <p>{recipe[0]?.quantity}</p>
        </S.ServingContainer>
      </S.SubDetailContainer>
    </S.Wrapper>
  );
};

export default MenuRecipe;
