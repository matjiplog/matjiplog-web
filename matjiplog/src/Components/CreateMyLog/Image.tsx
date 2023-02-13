import { ImageDiv, ImageTitleAndBtnDiv, ImageTitle, IconAndFileBtn, ImageIcon, ImageFileBtn, ImageLabel, ImagesSelectDiv, SelectImage, SlideLeftBtn, SlideRightBtn, DeleteBtn } from "../../styles/createMylog/image";

import { imageSelectStore, imageSelectTypes } from "../../stores/createMyLog/image";

import { useSlide, useSlideTypes } from "../../Hooks/useSlide";

function CreateMyLogImage(): JSX.Element {
  const { imageFile, addImageFile, initImageFile }: imageSelectTypes = imageSelectStore();
  const { slideIndex, leftClick, rightClick }: useSlideTypes = useSlide(imageFile.length);
  const selectImages = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { target, currentTarget } = e;
    const imageLists = currentTarget.files;
    let saveImages = [];

    if (target !== currentTarget || !imageLists) return;

    for (let i = 0; i < imageLists.length; i++) saveImages.push(URL.createObjectURL(imageLists[i]));

    addImageFile(saveImages);
  };

  return (
    <ImageDiv className="imageDiv">
      <ImageTitleAndBtnDiv>
        {!imageFile[0] ? 
          <ImageTitle>새 게시물 만들기</ImageTitle> : 
          <>
            {imageFile.length > 1 ? 
              <>
                <SlideLeftBtn size={20} onClick={leftClick} />
                <DeleteBtn size={20} onClick={initImageFile} />
                <SlideRightBtn size={20} onClick={rightClick} />
              </>
             : 
              <>
                <DeleteBtn size={20} onClick={initImageFile} />
              </>
            }
          </>
        }
      </ImageTitleAndBtnDiv>

      <IconAndFileBtn>
        {!imageFile[0] ? 
          <>
            <ImageIcon/>
            <ImageLabel htmlFor="profileImg" className="imgAddBtn">사진 추가하기</ImageLabel>
            <ImageFileBtn type="file" accept="image/*" multiple={true} onChange={selectImages} id="profileImg"/>
          </>
         : 
          <>
            <ImagesSelectDiv slideIndex={slideIndex} length={imageFile.length}>
              {imageFile.map((value: string, index: number): JSX.Element => {
                return <SelectImage key={index} src={value} length={imageFile.length}/>
              })}
            </ImagesSelectDiv>
          </>
        }
      </IconAndFileBtn>
    </ImageDiv>
  );
}
export default CreateMyLogImage;
