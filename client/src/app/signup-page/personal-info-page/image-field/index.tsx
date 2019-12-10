import React, { ChangeEvent, FunctionComponent, useContext } from 'react'
import { Fab, Paper, Typography } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import PhotoCameraRoundedIcon from '@material-ui/icons/PhotoCameraRounded'
import { LanguageContext } from '../../../context/language'
import { SignupFormContext } from '../../context/signup-form'

export class ImageFieldProps { }

const ImageField: FunctionComponent<ImageFieldProps> = () => {
  const
    { image, setImage } = useContext(SignupFormContext),
    { translate } = useContext(LanguageContext)
  return <>
    <div className="flex">
      <Paper square className="margin-top-1 h-7.5 w-7.5 radius-50">
        {image ?
          <img src={image} className="w-7.5 h-7.5 radius-50 object-fit" />
          : <PersonIcon className="w-7.5 h-7.5" />
        }
        <input
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const reader = new FileReader()
            reader.onload = () => setImage(reader.result as string)
            if (event.target.files[0]) reader.readAsDataURL(event.target.files[0])
          }}
          accept="image/*"
          className="none margin-top-minus-10"
          id="input-image"
          type="file"
        />
        <label htmlFor="input-image">
          <Fab component="span" size="small" className="absolute margin-top-5.3 margin-start-start-minus-2 w-2 h-2">
            <PhotoCameraRoundedIcon />
          </Fab>
        </label>
      </Paper>
      <Typography className="margin-top-7.5 margin-start-start-1">{translate.PROFILE_IMAGE}</Typography>
    </div>
  </>
}

export default ImageField