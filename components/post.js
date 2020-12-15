export default function postComponent (props) {
  return (
    <div className="container">
      <h2>This is a post.</h2>
      <p>{props.message}</p>
      <style jsx>
        {`
          .container {
            border: 1px solid #eee;
          }
        `}
      </style>
    </div>
  )
}
