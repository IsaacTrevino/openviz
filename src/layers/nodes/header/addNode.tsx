import React, { useEffect, useCallback, useState } from 'react';
import {
  Modal,
  Backdrop,
  Fade,
  Typography,
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  Box,
  Divider,
  IconButton,
  SvgIcon,
  TextField,
  Button,
  CircularProgress, 
  Container,
  FilledTextFieldProps, 
  OutlinedTextFieldProps, 
  StandardTextFieldProps
 } from '@material-ui/core';
 import Autocomplete from '@material-ui/lab/Autocomplete';
 import CloseIcon from '@material-ui/icons/Close';
 import { Formik, Form } from 'formik';
 import * as Yup from 'yup';
 import { DataStore } from 'aws-amplify';
 import { Node } from 'src/models'

const useStyles = makeStyles((theme) => ({
  root: {},
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    outline: 'none'
  },

}));

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
  rest?: any
}

const AddNode = ({ setOpen, isOpen, ...rest }: Props) => {
  const classes = useStyles();
  const [nodes, setNodes]: any | null = useState(null);

  const query = useCallback(() => {
    const fetchNodes = async () => {
      const nodes = await DataStore.query(Node);
      setNodes(nodes);
    };
    fetchNodes();
  },[]);


  useEffect(() => {
    query();
  },[]);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isOpen}
      onClose={() => setOpen(!isOpen)}
      disableBackdropClick
      disableEscapeKeyDown
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
          timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <Container maxWidth='sm' className={classes.card}>
          <Card>
            <CardHeader
              title='Add Node' 
              action={
                <IconButton size='small' onClick={() => setOpen(!isOpen)}>
                  <SvgIcon fontSize='small'>
                    <CloseIcon/>
                  </SvgIcon>
                </IconButton>
              }
            />
            <Divider/>
            <CardContent>
              <Formik
                initialValues={{
                  title: '',
                  position: {
                    x: 0,
                    y: 0,
                    z: 0
                  },
                  search: ['test'],
                  connections: []
                }}
                validationSchema={Yup.object().shape({
                  title: Yup.string().required('Required'), 
                //   search: Yup.string().required('Required'), 
                //   position: Yup.object().shape({
                //     x: Yup.number().required('Required'), 
                //     y: Yup.number().required('Required'), 
                //     z: Yup.number().required('Required'), 
                //   })
                // .required('required'),
                //   connections: Yup.array().of(Yup.object().shape({
                //     connectionId: Yup.string().required('Required')
                //   })).required('required'),
                })}
                onSubmit={(values, {
                  setErrors,
                  setStatus,
                  setSubmitting
                }) => {
                  try {
                    DataStore.save(
                      new Node({
                        title: values.title,
                        content: 'empty',
                        position: values.position,
                        //connections: values.connections
                      })
                    ).then(result => console.log(result));
                    setStatus({ success: true });
                    setSubmitting(false);
                    setOpen(!isOpen);
                  } catch (error) {
                    console.error(error)
                    setStatus({ success: false });
                    setErrors( error );
                    setSubmitting(false);
                  }
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  isSubmitting,
                  /* and other goodies */
                }) => (<>
                  {isSubmitting ? (
                  <Box
                      display="flex"
                      justifyContent="center"
                      my={5}
                  >
                      <CircularProgress />
                  </Box>
                  ) : (
                  <Form>
                    <Box mt={2}>
                      <TextField
                        error={Boolean(touched.title && errors.title)}
                        helperText={touched.title && errors.title}
                        fullWidth
                        size='small'
                        label='Title'
                        variant='outlined'
                        onChange={handleChange}
                        name='title'
                        value={values.title}
                      />
                    </Box>
                    <Box mt={2} display='flex' flexDirection='row' alignItems='center'>
                      <Autocomplete
                        fullWidth
                        multiple
                        id="size-small-outlined-multi"
                        size="small"
                        options={['test']} //nodes?.map((node: { id: string }) => node.id)}
                        getOptionLabel={(option) => option}
                        renderInput={(params: 
                          (JSX.IntrinsicAttributes & StandardTextFieldProps) | 
                          (JSX.IntrinsicAttributes & FilledTextFieldProps) | 
                          (JSX.IntrinsicAttributes & OutlinedTextFieldProps)) => (
                          <TextField {...params}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            value={values.search} 
                            name='search' 
                            variant="outlined" 
                            label="Connections" 
                            placeholder="Nodes" 
                          />
                        )}
                      />
                      <Box ml={2}>
                        <Button size='small' variant='outlined' onClick={() => {}}>
                          Search
                        </Button>
                      </Box>
                    </Box>
                    <Box mt={2} justifyContent='space-between' display='flex'>
                      <Box>
                        <Button size='small' variant='outlined' onClick={() => setOpen(!isOpen)}>
                          Cancel
                        </Button>
                      </Box>
                      <Box>
                        <Button size='small' color='primary' variant='outlined' type='submit'>
                          Submit
                        </Button>
                      </Box>
                    </Box>
                  </Form>
                  )}</>
                )}
              </Formik>
            </CardContent>
          </Card>
        </Container>
      </Fade>
    </Modal>
  );
};

export default AddNode;