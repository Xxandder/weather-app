

type Properties = {
    name: string;
    image: string;
    startDate: string;
    endDate: string;
}

const Trip: React.FC<Properties> = (props) =>{
    const { name, image, startDate, endDate } = props;

    return <div>
        <div>
            <img src={image} alt={name} />
        </div>
        <h2>{name}</h2>
        <p>{startDate} - {endDate}</p>
    </div>;
  }
  
  export default Trip;
  