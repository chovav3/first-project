import merge from 'lodash/merge'
import React, { createContext, FunctionComponent, useContext, useEffect, useRef, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { LanguageContext } from './language'

export class UXContextValue {
  indicateError: (options?: indicateErrorOptions) => void
  indicateInfo: (options?: indicateInfoOptions) => void
  startAsyncOperation: () => void
  endAsyncOpration: () => void
}

abstract class IndicateOptions {
  message?= ``
}

class indicateErrorOptions extends IndicateOptions {
  constructor(options?: indicateErrorOptions) {
    super()
    merge(this, options)
  }
}

class indicateInfoOptions extends IndicateOptions {
  constructor(options?: indicateInfoOptions) {
    super()
    merge(this, options)
  }
}

export const UXContext = createContext(new UXContextValue)

const UXProvider: FunctionComponent = ({ children }) => {
  const
    { translate } = useContext(LanguageContext),
    [progressActivate, setProgressActivate] = useState(false),
    [snackbarActive, setSnackbarActive] = useState(false),
    [snackbarMessage, setSnackbarMessage] = useState(``),
    [snackbarForError, setSnackbarForError] = useState(false),
    indicateErrorDefaults = new indicateErrorOptions({ message: translate.DEFAULT_ERR_MSG }),
    indicateInfoDefaults = new indicateErrorOptions({ message: translate.DEFAULT_INFO_MSG }),
    activateSnackbar = ({ message }: { message: string }) => {
      setSnackbarActive(true)
      setSnackbarMessage(message)
    },
    indicateError = ({ message = indicateErrorDefaults.message } = { message: indicateErrorDefaults.message }) => {
      setSnackbarForError(true)
      activateSnackbar({ message })
    },
    indicateInfo = ({ message = indicateInfoDefaults.message } = { message: indicateInfoDefaults.message }) => {
      activateSnackbar({ message })
    },
    startAsyncOperation = () => {
      setProgressActivate(true)
    },
    endAsyncOpration = () => {
      setProgressActivate(false)
    }
  return <UXContext.Provider value={{ indicateError, indicateInfo, startAsyncOperation, endAsyncOpration }}>
    {progressActivate && <CircularProgress className="fixed center z-10" />}
    {<Snackbar
      open={snackbarActive}
      onClose={() => setSnackbarActive(false)}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
    >
      <SnackbarContent
        message={snackbarMessage}
        className={snackbarForError ? "background-color-error" : ""}
      />
    </Snackbar>}
    {children}
  </UXContext.Provider>
}

export default UXProvider