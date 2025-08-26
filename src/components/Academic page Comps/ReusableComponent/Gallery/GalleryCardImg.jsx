function GalleryCardImg({ img_src }) {
  console.log("Callery imgs :", img_src);
  return (
    <>
      <img className="galleryimg" src={img_src} alt="icon" />
    </>
  );
}

export default GalleryCardImg;
