import {commonParams} from './config'
import axios from 'axios'
import qs from 'qs'

export function getPremium() {
  const url = 'https://esales-dev.aegonthtf.com/sales/allpurpose/allpurposeAdd_createOrder.action'

  let data = Object.assign({}, commonParams, {
    additionOrNot: 2,
    durationUnit: 0,
    paymentYear: 30,
    paymentType: 12,
    insBirthday: '2018-10-14',
    insGender: 2,
    primaryAmount: 400000,
    primaryPremium: 240,
    additionAmount: '',
    addition1Premium: 0,
    totalPremium: 240,
    insAge: 0,
    sourceFrom: 'MeiShi',
    openId: '',
    sid: 'MeiShi',
    step: 1,
    insuredDuration: 30,
    appProvince: 110000,
    appCity: 110100,
    appDistinct: 110101,
    tbRelation: 2,
    productCode: 'TCIB07'
  })
  data = qs.stringify(data)
  return axios.post(url, data, {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
