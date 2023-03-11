# 17 How form submissions work

*file: ~/app/components/NewNote.jsx*

```jsx
  // ....
  
  return (
    <form method="post" id="note-form">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows="5" required />
      </p>
      <div className="form-actions">
        <button>Add Note</button>
      </div>
    </form>
  ); 
  
  // ....
}
```

This form is behaves just normal HTML form: When `<button>` is clicked, it will post to whatever the url this Remix app is running, using the `post` method (method is specify by the `method` attribute on the `<form>` element). So in out case, the url will be: 

```
http://192.168.2.14:3000/notes?title=sadf&content=asdf
```





