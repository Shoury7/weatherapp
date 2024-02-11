import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "../src/InfoBox.css"
export default function InfoBox({info}){
    let INIT_IMG = "https://img.freepik.com/premium-vector/weather-cloud-sun-rain-lightning-logo-design-symbol-icon-template_23729-1786.jpg"
    
    return (
        <div className='Infobox'>
            <h1>Weather - haze</h1>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_IMG}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.cityName.toUpperCase()}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"div"}>
            <p>Temperature = {info.temp}</p>
            <p>Minimum Temperature = {info.tempMin}</p>
            <p>Maximum Temperature = {info.tempMax}</p>
            <p>Humidity = {info.humidity}</p>
            <p>The weather can be described as <b><i>{info.weather}</i></b> and feels like {info.feelsLike}</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}