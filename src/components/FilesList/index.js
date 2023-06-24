import {v4 as uuidv4} from 'uuid'
import FileItem from '../FileItem'

import './index.css'

const filesList = [
  {
    id: uuidv4(),
    imgUrl:
      'https://res.cloudinary.com/dr2jqbir9/image/upload/v1687502427/images_bbtkls.jpg',
    description: 'Figma Output.fig',
    lastModified: 'Jun 14,2023',
    fileSize: '53 KB',
    altText: 'File Extenstion1',
  },
  {
    id: uuidv4(),
    imgUrl:
      'https://res.cloudinary.com/dr2jqbir9/image/upload/v1687502964/download_es2d2q.png',
    description: 'Output 1.png',
    lastModified: 'Jun 8,2023',

    fileSize: '14 LB',
    altText: 'File Extenstion2',
  },
  {
    id: uuidv4(),
    imgUrl:
      'https://res.cloudinary.com/dr2jqbir9/image/upload/v1687502964/download_es2d2q.png',
    description: 'Output 2.png',
    lastModified: 'Jun 8,2023',
    fileSize: '7 KB',
    altText: 'File Extenstion3',
  },
  {
    id: uuidv4(),
    imgUrl:
      'https://res.cloudinary.com/dr2jqbir9/image/upload/v1687503607/download_1_j8ngje.png',
    description: 'Output.mp4',
    lastModified: 'Jun 9,2023',
    fileSize: '11 MB',
    altText: 'File Extenstion4',
  },
  {
    id: uuidv4(),
    imgUrl:
      'https://res.cloudinary.com/dr2jqbir9/image/upload/v1687502427/images_bbtkls.jpg',
    description: 'TEXT.txt',
    lastModified: 'Jun 14,2023',
    fileSize: '4 KB',
    altText: 'File Extenstion5',
  },
]

const FilesList = () => (
  <div className="bg-con">
    <div>
      <h1 className="heading">
        REACT JS TEST.zip <span>5 items</span>
      </h1>
      <hr />
      <div className="files-heading">
        <p>Name</p>

        <p>Last modified</p>
        <p>File size</p>
      </div>
      <hr />
      <ul>
        {filesList.map(each => (
          <FileItem singleItem={each} key={each.id} />
        ))}
      </ul>
    </div>
  </div>
)

export default FilesList
