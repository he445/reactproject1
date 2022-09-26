import "./formModal.css"
function form({ handleModal})

{
 
    return(
   
<form>
  <label for="fname">Titulo:</label>
  <input type="text" id="fname" name="fname"/>
  <label for="lname">Texto</label>
  <input type="text" id="lname" name="lname"/>
</form>

)}
export default form