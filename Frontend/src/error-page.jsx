import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error=useRouteError();
    console.log(error);
  return (
    <div className='main-error-page'>
        <h2>Oops, An error occured</h2>
        <h4>{error.status+" "+ error.statusText}</h4>
        <h4>{error.data || " "}</h4>
    </div>
  )
}

export default ErrorPage;