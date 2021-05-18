import Cookies from 'js-cookie'
import crypto from 'crypto-js'

export function setCookie(name, value) {
  const val = getAES(JSON.stringify(value))
  Cookies.set(name, val, { expires: 1, path: '/' })
}

export function getCookie(name) {
  const val = Cookies.get(name)
  if (val) {
    const fromAesValue = getDAes(val)
    if (fromAesValue) {
      return JSON.parse(fromAesValue)
    }
  }
  return null
}

export function getAllCookies() {
  return Cookies.get()
}

export function removeCookie(name) {
  const option = { path: '/' }
  if (Array.isArray(name)) {
    name.forEach((item) => {
      Cookies.remove(item, option)
    })
  } else {
    Cookies.remove(name, option)
  }
}

export function removeAllCookies() {
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i]
    const eqPos = cookie.indexOf('=')
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
  }
}

export function removeCookieWithDomain(name, domain) {
  Cookies.remove(name, { domain })
}

/** ----------------------- 基础方法 ----------------------- */
// 加密
export function getAES(data) {
  const key = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' // 密钥
  const iv = '1234567812345678'
  const encrypted = getAesString(data, key, iv) // 密文
  return encrypted
}

// 解密
export function getDAes(data) {
  const key = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' // 密钥
  const iv = '1234567812345678'
  const decryptedStr = getDAesString(data, key, iv)
  return decryptedStr
}

// 加密
export function getAesString(data, _key, _iv) {
  const key = crypto.enc.Utf8.parse(_key).toString()
  const iv = crypto.enc.Utf8.parse(_iv)
  const encrypted = crypto.AES.encrypt(data, key, {
    iv,
    mode: crypto.mode.CBC,
    padding: crypto.pad.Pkcs7,
  })
  return encrypted.toString() // 返回的是base64格式的密文
}

// 解密
export function getDAesString(encrypted, _key, _iv) {
  const key = crypto.enc.Utf8.parse(_key).toString()
  const iv = crypto.enc.Utf8.parse(_iv)
  const decrypted = crypto.AES.decrypt(encrypted, key, {
    iv,
    mode: crypto.mode.CBC,
    padding: crypto.pad.Pkcs7,
  })
  let res
  try {
    res = decrypted.toString(crypto.enc.Utf8)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('decrypted cookie error', error)
  }
  return res
}
