const uploadAuthorAvatar = document.querySelector(".author__field");
const uploadArticlePreview = document.querySelector(".article-preview__field");
const removeAuthorAvatar = document.querySelector(".remove-author");
const removeArticlePreview = document.querySelector(".remove-article-preview");
const titleInput = document.querySelector(".form__field-title");
const subtitleInput = document.querySelector(".form__field-subtitle");
const authorNameInput = document.querySelector(".form__field-author-name");
const dateInput = document.querySelector(".form__field-date");

const authorPhoto = document.querySelector(".author__photo");
const authorUpload = document.querySelector(".author__upload");
const authorCamera = document.querySelector(".author__camera");
const removeAuthor = document.querySelector(".remove-author");
const postCardPreviewAuthorAvatar = document.querySelector(".post-card-preview-inside-author__avatar");

const articlePreviewPhoto = document.querySelector(".article-preview__photo");
const articlePreviewUpload = document.querySelector(".article-preview__upload");
const articlePreviewCamera = document.querySelector(".article-preview__camera");
const articlePreviewInsideLogo = document.querySelector(".article-preview-inside__logo");

const postCardPreviewInsideLogo = document.querySelector(".post-card-preview-inside__logo");

const contentInput = document.querySelector(".input-content__content");
const publishButton = document.querySelector(".form-heading__publish");
let authorImage;
let postImage;
let authorImageName;
let postImageName;

titleInput.addEventListener(
  "input",
  () => {
    const articlePreviewTitle = document.querySelector(".article-preview-inside__title");
    const postCardPreviewTitle = document.querySelector(".post-card-preview-inside__title");
    articlePreviewTitle.innerHTML = titleInput.value;
    postCardPreviewTitle.innerHTML = titleInput.value;
    if (titleInput.value == "") {
      articlePreviewTitle.innerHTML = "New Post";
      postCardPreviewTitle.innerHTML = "New Post";
    }
  }
)

subtitleInput.addEventListener(
  "input",
  () => {
    const articlePreviewSubtitle = document.querySelector(".article-preview-inside__description");
    const postCardPreviewSubtitle  = document.querySelector(".post-card-preview-inside__description");
    articlePreviewSubtitle.innerHTML = subtitleInput.value;
    postCardPreviewSubtitle.innerHTML = subtitleInput.value;
    if (subtitleInput.value == "") {
      articlePreviewSubtitle.innerHTML = "Please, enter any description";
      postCardPreviewSubtitle.innerHTML = "Please, enter any description";
    }
  }
)

authorNameInput.addEventListener(
  "input",
  () => {
    const postCardPreviewAuthorName  = document.querySelector(".post-card-preview-inside-author__name");
    postCardPreviewAuthorName.innerHTML = authorNameInput.value;
    if (authorNameInput.value == "") {
      postCardPreviewAuthorName.innerHTML = "Enter author name";
    }
  }
)

dateInput.addEventListener(
  "change",
  () => {
    const postCardPreviewDate = document.querySelector(".post-card-preview-inside-date");
    if (dateInput.value !== "") {
      postCardPreviewDate.innerHTML = dateInput.valueAsDate.toLocaleDateString("en-US");
    } else{
      postCardPreviewDate.innerHTML = "mm/dd/yyyy";
    }
  }
)

uploadAuthorAvatar.addEventListener(
  "change",
  () => {
    const file = document.querySelector(".author__field").files[0];
    const reader = new FileReader();
  
    reader.addEventListener(
      "load",
      () => {
        authorPhoto.src = reader.result;
        authorUpload.innerHTML = "Upload New";
        authorCamera.classList.remove("hidden");
        removeAuthor.classList.remove("hidden");

        postCardPreviewAuthorAvatar.src = reader.result;

        authorImage = reader.result;
        authorImage = authorImage.replace(/^data:image\/[a-z]+;base64,/, "");
        authorImageName = file.name;
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  } 
)   

uploadArticlePreview.addEventListener(
  "change",
  () => {
    const file = document.querySelector(".article-preview__field").files[0];
    const reader = new FileReader();
  
    reader.addEventListener(
      "load",
      () => {
        articlePreviewPhoto.src = reader.result;
        articlePreviewUpload.classList.remove("hidden");
        articlePreviewCamera.classList.remove("hidden");
        articlePreviewInsideLogo.src = reader.result;
        removeArticlePreview.classList.remove("hidden");

        postCardPreviewInsideLogo.src = reader.result;

        postImage = reader.result;
        postImage = postImage.replace(/^data:image\/[a-z]+;base64,/, "");
        postImageName = file.name;
    }
  )
  if (uploadArticlePreview.files[0]) {
    reader.readAsDataURL(uploadArticlePreview.files[0]);
  } 
  }  
)  

removeAuthorAvatar.addEventListener(
  "click",
  () => {
    authorPhoto.src = "/static/images/Avatar.svg";
    authorUpload.innerHTML = "Upload";
    authorCamera.classList.add("hidden");
    removeAuthor.classList.add("hidden");

    postCardPreviewAuthorAvatar.src = "/static/images/empty-avatar.svg";

    authorImage = "";
    authorImageName = "";
  } 
) 

removeArticlePreview.addEventListener(
  "click",
  () => {
    articlePreviewPhoto.src = "/static/images/camera_mb.svg";
    articlePreviewUpload.classList.add("hidden");
    articlePreviewCamera.classList.add("hidden");
    articlePreviewInsideLogo.src = "/static/images/empty-article.svg";
    removeArticlePreview.classList.add("hidden");

    postCardPreviewInsideLogo.src = "/static/images/empty-postcard.svg";

    postImage = "";
    postImageName = "";
  }
)  

publishButton.addEventListener(
  "click",
  () => {
    const data = {
      title: titleInput.value,
      subtitle: subtitleInput.value,
      authorName: authorNameInput.value,
      publishDate: dateInput.valueAsDate.toLocaleDateString("en-US"),
      content: contentInput.value,
      authorIMGName: authorImageName,
      postIMGName: postImageName,
      authorIMG: authorImage,
      postIMG: postImage,
    }
    const json = JSON.stringify(data, null, "\t");
    console.log(json);
  }
)

