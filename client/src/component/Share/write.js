import { useState } from 'react'
import { Form,Grid } from 'semantic-ui-react'

  const Write = () =>
  {

    const options = [
        { key: 'm', text: 'Easy', value: 'Easy' },
        { key: 'f', text: 'Medium ', value: 'Medium' },
        { key: 'o', text: 'Hard', value: 'Hard' },
      ]

      const [value,setValue] = useState(null);

    const handleChange = (e, { value }) => setValue({ value })

      return (

        <Grid>
        <Grid.Column width={3}>
          
        </Grid.Column>
        <Grid.Column width={10}>
        <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Company Name' placeholder='Company Name' />
          <Form.Input fluid label='Job Position' placeholder='Job Position' />
          <Form.Select
            fluid
            label='Difficulty'
            options={options}
            placeholder='Gender'
          />
        </Form.Group>
        <Form.TextArea label='Experience' placeholder='Tell us more about your interview experience...' />
        <Form.Button>Submit</Form.Button>
      </Form>
        </Grid.Column>
        <Grid.Column width={3}>
          
        </Grid.Column>
      </Grid>


        
 
        

      )
  }

  export default Write;