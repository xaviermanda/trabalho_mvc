const admin = require('firebase-admin');

if (!admin.apps.length) {

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: 'atividade-mvc',
      clientEmail: 'firebase-adminsdk-fbsvc@atividade-mvc.iam.gserviceaccount.com',
      privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDA8DQAwLoV1hN7\nOJZhNHZd5FU9GG7RtueSSwfLHBjsxUpGRhz85cCpW2JOTQOL+ndCrXf3FIzGwtfH\n8EYGeJHwetrui3sKNH1WhzCs+8kLTNFdQn9j9DdNe0UIiTxo2vBry1MsoLe+R37R\n82eYjNvZKAooCkGxEfIeKdMbr8CfI3beEcCQn821YCBDRYF3HNe8SqUxVZqJflMy\nkuJwKqUjfl1YZGC1UnpMdA0kPhijUJchMM1DH16eSUXK5DB0egD895xxUqhe+tGz\n9Ro5naZy6UVqJ3vM1GAiLbmDHbUkSEmOh5CL4Vuz1TcNjZRHDZFqwpV94LnC40CJ\nfbNgmUILAgMBAAECggEAUDMIys9SCsWj73KEP/+4vCqvq+e+GPp4o/0ATlNtoO4Z\ng8CdSBqQzVUpNfcZZFRGwrasyU4Hfo97dqbP1NzFfTr0Sng8Ou+6sf8cIqu+1C2o\nUaXUok3ftxtohLXXIJbxnT01Y7Wi6zt44fjVtTnIISpdnms1B0+4XwVvtXCHFx7D\nH1k78EAIV5nex2jKDDM6ZxdyV35e7FUkPe0oHwHovh5TGITVPcBzwD0jz99WQ4aN\nUSPjkF/nB2ECTtDmfLXEfGqy+zg0gs/QlpiIrzgyM/owXlx67d9/+aWKQOTvuNis\nDXUhLvHBqal/5C4TRz0N94l5qojnHMoyCpOrf6YjgQKBgQD1PCocg0LIWmG7KnaE\n3kg2Tu5dI046Tgu95P2BMt0DwRfzBj2P99+oLPt9MuJV7AyDb9pFXfFPLnaeZy/W\n2s3tXdzw6maTBcXJB32gGF5vEeYNCrxRJS7ZAFAUGKSuFjL1ZdqJS5A/SmymwC4h\nowM8oU18nfaC7sJtqPuAdGM34QKBgQDJaFpLRZP4cnKA+dbZEOpewpOBS0X+y3zz\nz4P+leZ4PjEaSTTDXyP7hU9dPpfTmqJcbiyEvDtQ56MzX2OiVrR3b/mnWv0AQGBm\nANy/py/ne1vaE1SZ4KCkiPB/fAjRjJEQNyyUpEHYGWOpmkfAxqgeWjybvaDczkol\nIh94fNHHawKBgDJ+XtVcGYYTRgg5qAmXkxrLibzXpiXPKA/DdIcDqAo72eiKImbg\nTMbd7DJNJdk3LyRpBXI+846wLHBVIr6Ect4q83EPcmtXRvArgKxUGC2aa9nHmhrD\nIzA/Jj3dDRtjKr7oZ+TZECxX8KMs8tKuM95qAABmrfkrnBDkOFSsojlBAoGAbCVC\nRqSnnYImhaahfJCeqB8mgQhgHz44a9oDcBIhXHNYflrMoBNYCNg+Ez1m3NJtV+A4\nu1UvLHQUp6MSprqT0IYpsXkj3Jy0plDUN3yYNl2Apoo2pSF+YJq/OFTrj0lBI0nd\nADtqt5R6dTlISfThlNqzLJUX6ThDi8jUySeMpN0CgYEA54nMCINrccR9ssgW0sa4\n0ix2Xasdy73YQ5vu2JEIkzdPNcoUGb7o5bb96CoPgq1TeZWflxJKex/zzePXGmIp\nOfDZ3yUpk/EbpORKqhG3IaUudsjTDktP9QjXDNk4dp+f3DV6maDQTWA7YYbFHlrQ\naXH8/fNjiPD+kcsa8zOMXx8=\n-----END PRIVATE KEY-----\n"
    }),
    databaseURL: 'https://atividade-mvc-default-rtdb.firebaseio.com'
  });

}

module.exports = admin.database();