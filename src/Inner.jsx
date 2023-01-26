

const Inner = (props) => {
  
  return (
    <div style={{display: props.hiding}}>
      <p>Name: {props.name}, age: {props.age}</p>
      
    </div>
  );
};

export default Inner;
