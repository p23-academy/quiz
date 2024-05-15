const ResultView = ({points, setPoints, setIndex}) => {
  let title;
  switch (points) {
    case 0:
      title = "Kurčina";
      break;
    case 1:
      title = "Pa eto";
      break;
    case 2:
      title = "Solidno";
      break;
    case 3:
      title = "Svaka čast!";
      break;
  }

  const again = () => {
    setPoints(0)
    setIndex(0)
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>Nema šta</p>
      <p>Bodova: {points}</p>
      <button onClick={again}>Ponovo</button>
    </div>
  )
}

export default ResultView;