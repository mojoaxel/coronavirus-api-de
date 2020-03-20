## Links

- Übersicht: https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=cases%20desc&outSR=102100&resultOffset=0&resultRecordCount=1000&cacheHint=true

```js
{
	"attributes": {
		"OBJECTID": 283,
		"ADE": 4,
		"GF": 4,
		"BSG": 1,
		"RS": "09563",
		"AGS": "09563",
		"SDV_RS": "095630000000",
		"GEN": "Fürth",
		"BEZ": "Kreisfreie Stadt",
		"IBZ": 40,
		"BEM": "--",
		"NBD": "ja",
		"SN_L": "09",
		"SN_R": "5",
		"SN_K": "63",
		"SN_V1": "00",
		"SN_V2": "00",
		"SN_G": "000",
		"FK_S3": "R",
		"NUTS": "DE253",
		"RS_0": "095630000000",
		"AGS_0": "09563000",
		"WSK": "1972/07/01 00:00:00.000",
		"EWZ": 127748,
		"KFL": 63.35,
		"DEBKG_ID": "DEBKGDL20000DWB0",
		"Shape__Area": 63285539.9587402,
		"Shape__Length": 45823.6245653548,
		"death_rate": 0,
		"cases": 16,
		"deaths": 0,
		"cases_per_100k": 12.5246579202806,
		"cases_per_population": 0.0125246579202806,
		"BL": "Bayern",
		"BL_ID": "9",
		"county": "SK Fürth"
	}
}
```

#### Offizielle Meldungen (Fürth): 

https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?
f=json
&where=IdLandkreis%3D%2709563%27
&returnGeometry=false
&spatialRel=esriSpatialRelIntersects
&outFields=ObjectId%2CAnzahlFall%2CMeldedatum
&orderByFields=Meldedatum%20asc
&resultOffset=0
&resultRecordCount=2000
&cacheHint=true


#### Alters/Geschlechter Verteilung: 

https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?
f=json
&where=(Geschlecht%3C%3E%27unbekannt%27%20AND%20Altersgruppe%3C%3E%27unbekannt%27)%20AND%20(IdLandkreis%3D%2709563%27)
&returnGeometry=false
&spatialRel=esriSpatialRelIntersects&outFields=*
&groupByFieldsForStatistics=Altersgruppe%2CGeschlecht
&orderByFields=Altersgruppe%20asc&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22AnzahlFall%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D
&cacheHint=true

https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?
f=json
&where=Geschlecht%3C%3E%27unbekannt%27%20AND%20Altersgruppe%3C%3E%27unbekannt%27
&returnGeometry=false
&spatialRel=esriSpatialRelIntersects
&outFields=*
&groupByFieldsForStatistics=Altersgruppe%2CGeschlecht&orderByFields=Altersgruppe%20asc
&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22AnzahlFall%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D
&cacheHint=true

#### Todesfälle

https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?
f=json
&where=OBJECTID%3D283
&returnGeometry=false
&spatialRel=esriSpatialRelIntersects
&outFields=*
&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22deaths%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&outSR=102100
&cacheHint=true


f: json
where: OBJECTID=283
returnGeometry: false
spatialRel: esriSpatialRelIntersects
outFields: *
outStatistics: [{"statisticType":"sum","onStatisticField":"deaths","outStatisticFieldName":"value"}]
outSR: 102100
cacheHint: true



#### Bundesländer

https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&groupByFieldsForStatistics=BL&orderByFields=BL%20asc&outStatistics=%5B%7B%22statisticType%22%3A%22count%22%2C%22onStatisticField%22%3A%22BL%22%2C%22outStatisticFieldName%22%3A%22count_result%22%7D%5D&outSR=102100&cacheHint=true


https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22cases%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&cacheHint=true