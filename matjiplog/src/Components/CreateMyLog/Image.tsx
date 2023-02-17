import { ImageDiv, ImageTitleAndBtnDiv, ImageTitle, IconAndFileBtn, ImageIcon, ImageFileBtn, ImageLabel, ImagesSelectDiv, SelectImage, SlideLeftBtn, SlideRightBtn, DeleteBtn } from "../../styles/createMylog/image";

import { useSlide, useSlideTypes } from "../../Hooks/useSlide";
import { useImageSelect, useImageSelectTypes } from '../../Hooks/useImageSelect';

function CreateMyLogImage(): JSX.Element {
  const { images, selectImages, deleteImages }: useImageSelectTypes = useImageSelect();
  const { slideIndex, leftClick, rightClick }: useSlideTypes = useSlide(images.length-1);

  return (
    <ImageDiv className="imageDiv">
      <ImageTitleAndBtnDiv>
        {!images[0] ? 
          <ImageTitle>새 게시물 만들기</ImageTitle> : 
          <>
            {images.length > 1 ? 
              <>
                <SlideLeftBtn size={20} onClick={leftClick} />
                <DeleteBtn size={20} onClick={deleteImages} />
                <SlideRightBtn size={20} onClick={rightClick} />
              </>
             : 
              <>
                <DeleteBtn size={20} onClick={deleteImages} />
              </>
            }
          </>
        }
      </ImageTitleAndBtnDiv>

      <IconAndFileBtn>
        {!images[0] ? 
          <>
            <ImageIcon/>
            <ImageLabel htmlFor="profileImg" className="imgAddBtn">사진 추가하기</ImageLabel>
            <ImageFileBtn type="file" accept="image/*" multiple={true} onChange={selectImages} id="profileImg"/>
          </>
         : 
          <>
            <ImagesSelectDiv slideIndex={slideIndex} length={images.length}>
              {images.map((value: string, index: number): JSX.Element => {
                return <SelectImage key={index} src={value} length={images.length}/>
              })}
            </ImagesSelectDiv>
          </>
        }
      </IconAndFileBtn>
    </ImageDiv>
  );
}
export default CreateMyLogImage;
