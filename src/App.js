import './App.css';

function App() {
  return (
<div>
  <div class='bg'>
<nav class="navbar bg-secondary shadow-lg mb-5">
  <div class="container">
    <h4 class="text-white">Anees <span class='text-warning'>A.</span></h4>
    <h3 class='text-warning'>Welcome To My Quiz App.</h3>
    <h4 class='text-white'>Total Question : <span class='text-warning'>1/5</span></h4>
  </div>
</nav>
<div class="card al mt-4">
  
  <div class="card-body">
    <h5 class="card-title">Questrion No : 01</h5>
    <p class="card-text bg-light mt-3">The First Mechanical Computer Design By Charles Babbage Was Calles?</p>
  </div>
 
 <div class='ms-2 mt-3'>
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio"></input>
  <label class="form-check-label" >Abacus</label>
</div>


<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" ></input>
  <label class="form-check-label" >Analytical Engine</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio"></input>
  <label class="form-check-label " >Calculator</label>
</div>


<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio"></input>
  <label class="form-check-label" >Processor</label>
</div>
</div>
  <div class="card-body">
  <button  class="btn btn-warning ">Previous</button>
  <button  class="btn btn-warning" style={{margin:'50px'}}>Next.</button>

  </div>

</div>
<div>
  <h3 class='text-warning score'> Total Score = </h3>
</div>
</div>

</div>


);
}

export default App;
