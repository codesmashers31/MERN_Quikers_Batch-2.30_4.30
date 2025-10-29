const tea = (TeaComponent)  => {

  return (props)=>{

    return (
      <div>
        This is HOC
        <TeaComponent {...props} />
      </div>
    )

  }

}
 

const PlainTeav = () =>{
  return(
    <>
    <p>This is plain tea</p>
    </>
  )
}

const App  = tea(PlainTeav)


export default App
