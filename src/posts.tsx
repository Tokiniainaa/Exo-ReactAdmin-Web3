
import { List,Edit,Show,Create, Datagrid, TextField ,ReferenceField, SimpleForm, TextInput ,SelectInput,ReferenceInput,SimpleShowLayout, Button, ReferenceManyField} from "react-admin";

import CommentList from '../src/comments';
import { CommentCreate } from "../src/comments";



export const PostList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <ReferenceField source="userId" reference="users">
                <TextField source="username" />
            </ReferenceField>
           
           
        </Datagrid>
    </List>
);

export const PostCreate = () => ( 
    <Create>
        <SimpleForm>
            <TextInput source="title" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="username" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export const PostShow = () => (
 
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <ReferenceField source="userId" reference="users">
                <TextField source="username" />
            </ReferenceField>
            <Button
        component={CommentCreate}
        label="Add Comment"
      />
      <ReferenceManyField
        label="All Comments"
        reference="comments"
        target="postId"
      >
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" label="Name" />
          <TextField source="email" label="Email" />
        </Datagrid>
      </ReferenceManyField>   
        </SimpleShowLayout>
    </Show>
);



export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="username" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);





