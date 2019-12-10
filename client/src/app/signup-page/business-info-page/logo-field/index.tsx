import React, { ChangeEvent, FunctionComponent, useContext } from 'react'
import { Fab, Paper, Typography } from '@material-ui/core'
import InsertPhotoTwoToneIcon from '@material-ui/icons/InsertPhotoTwoTone'
import PhotoCameraRoundedIcon from '@material-ui/icons/PhotoCameraRounded'
import { LanguageContext } from '../../../context/language'
import { SignupFormContext } from '../../context/signup-form'

export class LofoFieldProps { }

const LofoField: FunctionComponent<LofoFieldProps> = () => {
  const
    { logo, setLogo } = useContext(SignupFormContext),
    { translate } = useContext(LanguageContext)
  return <>
    <div className="flex">
      <Paper square className="margin-top-1 h-7.5 w-7.5 radius-15">
        {logo ?
          <img src={logo} className="w-7.5 h-7.5 radius-15 object-fit" />
          : <InsertPhotoTwoToneIcon className="w-7.5 h-7.5" />
        }
        <input
          accept="image/*"
          className="none margin-top-minus-10"
          type="file"
          autoFocus
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const reader = new FileReader()
            reader.onload = () => setLogo(reader.result as string)
            if (event.target.files[0]) reader.readAsDataURL(event.target.files[0])
          }}
          id="input-logo"
        />
        <label htmlFor="input-logo">
          <Fab
            component="span"
            size="small"
            className="absolute margin-top-5.3 margin-start-start-minus-2 w-2 h-2"
          >
            <PhotoCameraRoundedIcon />
          </Fab>
        </label>
      </Paper>
      <Typography className="margin-top-7.5 margin-start-start-1">{translate.LOGO}</Typography>
    </div>
  </>
}

export default LofoField