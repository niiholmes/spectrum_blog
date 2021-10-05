import { Segment, Header } from "semantic-ui-react";


export default function Footer () {
    return(
        <Segment basic textAlign='center' style={foot}>
            <Header as='h4'>Footer here, passing thru'</Header>
        </Segment>
    )
}



const foot={
    marginTop: '7em'
}