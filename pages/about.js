import MyLayout from "../components/MyLayout";


export default function About() {
  return (
      <MyLayout>
      <div>
        <h1>About page</h1>
        <p>Simple tutorial on Next.js.  Just discovering what it can do.  
        <br/>
        So far it seems okay, a different way of bringing forth your React components.  <br/>
        Still looking at it to apply DRY principals. 
        <br/>
        CSS processor is okay, instyle. 
        <br/>
          Connected to the Movie api and successfully played around with it.
          <br/>
          Will later connect to a weather api, along with making a simple site.</p>
      </div>
      </MyLayout>
  )
} 
