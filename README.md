# nodejs-developerCourse
node inspect for debugging
nodemon inspect for debugging with nodemon

node --inspect-brk for debugging in the chrome

encodeURIComponent('1301 lombard street')
    spaces with %20 filled
decodeURIComponent('') opposite

# express middle ware
it let us configure the app and how the app works
should use app.use to configure the middleware
express middle ware works how we declare the midlewares

#templating engine
reusable markup 
we use handle bars
there are lot of like ejs, pug

express default looking folder is views
#ssh keys for git
ls -al ~/.ssh
ssh-keygen -t rsa -b 4096 -C 'mareddyvenkatesh@gmail.com'

#heroku
heroku login
heroku keys:add
heroku keys
heroku keys:remove //removes the keys
ssh -v git@heroku.com
heroku create //
git push heroku
heroku open //opens the app in default browser

#Testing
Mocha
in the package.json in the scripts add mocha **/*.test.js and run npm test
Using nodemon
    nodemon --exec 'npm test'

Assertion Library mjackson expect

for testing express supertest library is used

rewire module is used to over come the actual modules for testing purposes.
