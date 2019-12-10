import size from 'lodash/size'
import React, { FunctionComponent, useContext, useEffect, useRef, useState } from 'react'
import { Avatar, CircularProgress, Dialog, DialogContent, DialogTitle, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import { Country } from '../../../../models/country.model'
import { CurrenciesContext } from '../../../context/currencies'
import { LanguageContext } from '../../../context/language'
import { SignupFormContext } from '../../context/signup-form'

export class CallingCodeFieldProps { }

const CallingCodeField: FunctionComponent<CallingCodeFieldProps> = () => {
  const
    { direction } = useContext(LanguageContext),
    { data, defaultCallingCode, defaultCurrency } = useContext(CurrenciesContext),
    { callingCode, setCallingCode, setCurrency } = useContext(SignupFormContext),
    { translate } = useContext(LanguageContext),
    [labelWidth, setLabelWidth] = useState(0),
    [search, setSearch] = useState<Country[]>(),
    [openSelectDialog, setOpenSelectDialog] = useState(false),
    [searchValue, setSearchValue] = useState(``),
    [value, setValue] = useState(``),
    inputLabel = useRef<HTMLLabelElement>(null)

  useEffect(
    () => {
      setLabelWidth(inputLabel.current!.offsetWidth)
    },
    []
  )

  useEffect(
    () => {
      setSearch(data)
      setCallingCode(defaultCallingCode)
      setCurrency(defaultCurrency)
      setValue(`${defaultCurrency} ${defaultCallingCode}`)
    },
    [data]
  )
  return <>
    <FormControl fullWidth required
      margin="normal"
      variant="outlined"
      className="margin-bottom-minus-1">
      <InputLabel className="rtl" ref={inputLabel}>{translate.SELECT_A_PREFIX}</InputLabel>
      <Select className="text-align-last-center"
        labelWidth={labelWidth}
        open={false}
        onOpen={() => {
          setOpenSelectDialog(true)
          setSearch(data)
        }}
        value={callingCode}
        renderValue={() => `${callingCode}+`}
      >
      </Select>
    </FormControl>
    <Dialog fullWidth
      open={openSelectDialog}
      onClose={() => setOpenSelectDialog(false)}
      className="rtl">
      {search === undefined ? `` :
        <DialogTitle>
          <TextField fullWidth autoFocus
            className="ltr"
            variant="outlined"
            label={translate.SEARCH}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSearchValue(event.target.value)
              if (event.target.value.match(/\+/) || event.target.value.match(/\d+/g)) {
                const filterData = data.filter(data => {
                  return data.callingCodes.join('+').replace('', '+').includes(event.target.value)
                })
                setSearch(filterData)
              } else {
                const filterData = data.filter(data => {
                  return data.nativeName.toLowerCase().includes(event.target.value.toLowerCase()) || data.name.toLowerCase().includes(event.target.value.toLowerCase())
                })
                setSearch(filterData)
              }
            }
            }
          />
        </DialogTitle>
      }
      <DialogContent>
        {search === undefined ?
          <Typography component="h2" align="center"><CircularProgress /></Typography>
          :
          search.map((data, index) => (
            <label key={index}>
              <MenuItem>
                <FormControl required>
                  <RadioGroup row
                    value={value.toString()}
                  >
                    <FormControlLabel
                      value={`${data.nativeName} ${data.callingCodes}`}
                      key={index}
                      label={``}
                      control={<Radio
                        className={direction === "ltr" ? "margin-end-end-minus-1.7" : ""}
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<CheckCircleIcon />}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                          setValue(event.target.value)
                          setCallingCode(+event.target.value.toString().replace(/[^0-9]/g, ``).replace(/,/g, `+,`))
                          setCurrency(event.target.value.replace(/[0-9,]/g, ''))
                          setOpenSelectDialog(false)
                        }
                        }
                      />}
                    />
                  </RadioGroup>
                </FormControl>
                <div className="absolute left margin-start-start-2.5">{data.nativeName} (+{data.callingCodes.join(`),(+`)})</div>
                <Avatar src={data.flag} className="w-1.5 h-1.5 left absolute" />
              </MenuItem>
            </label>
          ))}
        {
          size(search) ? `` :
            <div>
              <Typography align="center">{translate.ERORR_SEARCH}</Typography>
              <Typography align="center">{searchValue}</Typography>
              <Typography align="center">{translate.PLEASE_TRY_AGAIN}</Typography>
            </div>
        }
      </DialogContent>
    </Dialog>
  </>
}

export default CallingCodeField