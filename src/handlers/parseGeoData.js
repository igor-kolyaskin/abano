const parseGeoData = geoData => {
  return geoData && Array.isArray(geoData) && geoData.length === 5
    ? {
        lt: geoData[0],
        ln: geoData[1],
        zoom: geoData[2],
        geoId: geoData[3],
        geoTitle: geoData[4],
      }
    : null
}
export default parseGeoData
