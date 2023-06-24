import './index.css'

const FileItem = props => {
  const {singleItem} = props
  const {imgUrl, description, lastModified, fileSize, altText} = singleItem
  return (
    <li>
      <div className="first-con">
        <div className="con1">
          <img src={imgUrl} alt={altText} />
          <p>{description}</p>
        </div>
        <div className="con2">
          <p className="p1">{lastModified}</p>
          <p className="p2">{fileSize}</p>
        </div>
      </div>
      <hr />
    </li>
  )
}

export default FileItem
