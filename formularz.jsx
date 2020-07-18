function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
    }
  
  class Formularz extends React.Component {
     
   state = { name: '',surname: '', birth: '',number: '' };
   
   handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   }
    
     
   render() {
      const { name, surname, birth, number } = this.state;
      return (
        
        <div className="formularz">
          <div style={{ height: 40 }}>
            <h1> Formularz: </h1>
          </div>
          <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">Imię </label>
              <input id="name" name="name" value={name} onChange={this.handleChange} />
            <div style={{ height: 20 }}> </div>
             <span> Nazwisko </span>
              <input name="surname" value={surname} onChange={this.handleChange} />
            <div style={{ height: 20 }}> </div>
             <span> Data Urodzenia </span>
              <input name="birth" value={birth} onChange={this.handleChange}/>
            <div style={{ height: 20 }}> </div>
             <span> Numer Telefonu </span>
              <input name="number" value={number} onChange={this.handleChange} />
          </form>
          
           <div style={{ height: 30 }}> </div>
           <FancyBorder color="black">
              Dane:
             
          <div className="dane"> </div>
            <div>{ name }</div>
            <div>{ surname }</div>
            <div>{ birth }</div>
            <div>{ number }</div> 
             </FancyBorder>
          </div>
          
      );
    }
  }
  
  ReactDOM.render(
    <Formularz />,
    document.getElementById('app')
  );
