const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="/images/happy.jpg" alt="Happy Picture" />
             </div>
                 <div>
              Photo by <a href="https://unsplash.com/@alenin99?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alvin Lenin</a> on <a href="https://unsplash.com/photos/2ta8OjluZuI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
             </div>
                   </main>
      </Def>
    )
  }
  

module.exports = error404
