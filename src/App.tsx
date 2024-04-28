import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { PostList, PostCreate,PostShow,PostEdit } from './posts';

export const App = () => (
  <Admin dataProvider={dataProvider}> <Resource name="posts" list={PostList} create={PostCreate} show={PostShow} edit={PostEdit}  /></Admin>
);
/**posts/Crud
 * /posts/
 * id,title,userbane,coms
 * /posts/:id
 * commentButton =>/posts/:id/comments/
 * Comments:Crud
 * /posts/:id/comments/
 * id,name,email
 * /posts/:id/comments/:id
 */
