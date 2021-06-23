// modules required for routing
import { AnyARecord } from 'dns';
import express from 'express';
const router = express.Router();
export default router;

// define the book model
import book from '../Models/books';

/* GET books List page. READ */
router.get('/', (req, res, next) => 
{
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        page: 'books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {

    // show the edit view
    res.render('books/details', { title: 'Add', page: 'details', books: '' });

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {

     // instantiate a new book
  let newBook = new book
  ({
    "Title":req.body.Title,
    "Author":req.body.Author, 
    "Description":req.body.Description, 
    "Genre": req.body.Genre,
    "Price": req.body.Price
    
   
  });

  // db.books.insert({books data is here...})
  book.create (newBook,(err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }
    res.redirect('/books');
  });

});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

  let id = req.params.id;

  // pass the id to the db

  // db.books.find({"_id": id})

  book.findById(id, {}, {}, (err, bookItemToEdit) => 
  {
      if(err)
      {
          console.error(err);
          res.end(err);
      }

      // show the edit view
      res.render('books/details', { title: 'Edit', page: 'details', books: bookItemToEdit  });
  });
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

  let id = req.params.id;

  // instantiate a new book Item
  let updatedBookItem = new book
  ({
    "_id": id,
    "Title":req.body.Title,
    "Author":req.body.Author, 
    "Description":req.body.Description, 
    "Genre": req.body.Genre,
    "Price": req.body.Price
   
  });

  // find the book item via db.books.update({"_id":id}) and then update
  contact.updateOne({_id: id}, updatedContactItem, {}, (err) =>{
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/contacts_list');
  });

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
});


//module.exports = router;
