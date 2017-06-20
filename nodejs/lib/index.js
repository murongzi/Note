import http from 'http';
import react from 'react';
import { renderToString } from 'react-dom/server'

const app = Express()
const port = 3000

//Serve static files
app.use('/static', Express.static('static'))

// This is fired every time the server side receives a request
app.use(handleRender)

function handleRender(req, res) {
  // Create a new Redux store instance
  const store = createStore(counterApp)

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState))
}


app.listen(port)

console.log('Server running at http://127.0.0.1:1337/');