import React from 'react';
import { List, Datagrid, TextField, EmailField ,Create, SimpleForm, TextInput, Edit,SimpleShowLayout,Button,useRecordContext} from 'react-admin';
import { Link } from 'react-router-dom';


const CommentList = () => (
    <List >
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);
export default CommentList
export const CommentCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput  source='body'/>
        </SimpleForm>
    </Create>
);
export const CommentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);
const CommentShow = () => (
  
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
        </SimpleShowLayout>
);
interface CommentButtonProps {
    postId: string; //
}

const CommentButton: React.FC<CommentButtonProps> = ({ postId }) => (
    <Button
        component={Link}
        to={`/posts/${postId}/comments/create`}
        label="Add Comment"
    />
);



