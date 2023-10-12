export const FemaleOrNot = ({ isFemale}:  {isFemale: boolean}) => {
    if (isFemale === true) {
      return <span className={'gender'}>Вы выбрали Female!</span>;
    } else {
      return <span className={'gender'}>Вы выбрали Male!</span>;
    }
}
