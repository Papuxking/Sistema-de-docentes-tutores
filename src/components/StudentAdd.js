import React from 'react';
import './StudentForm.css';

function StudentAdd({}) {
    return (
        <div >
            <Container>
                <Card>
                    <div style={{ padding: 20 }}>
                        <UserForm submit={submit} />
                    </div>
                </Card>
                <Card>
                    <ul>
                        {/* <li key={x.name}>{`${x.name} ${x.lastname}: "Estudiante ingresado con éxito" ${x.tesis}`}</li> */}
                        <li >{`"Estudiante ingresado con éxito"`}</li>

                        {/* {usuarios.map(x => (
                                            //<li key={x.name}>{`${x.name} ${x.lastname}: "Estudiante ingresado con éxito" ${x.tesis}`}</li>
                                            <li >{`"Estudiante ingresado con éxito"`}</li>
                                        ))} */}
                    </ul>
                </Card>
            </Container>
        </div>
    );
}

export default StudentAdd;