*File: app/routes/demo.jsx*

```sh
import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <>
      <h1>hello world!</h1>
      <a href="/demo">Go to Demo Page with anchor</a>
      <br></br>
      <Link to="/demo">Go to Demo Page with Link</Link>
    </>
  );
}
```
