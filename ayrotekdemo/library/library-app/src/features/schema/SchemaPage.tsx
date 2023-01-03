import React, { useEffect, useState } from 'react';
import { SchemaSendRequest } from '../../models/SchemaSendRequest';
import { Form, Input, Button, Icon, Grid, Segment } from 'semantic-ui-react';
import { SchemaService } from '../../services/SchemaService';

function SchemaPage() {
    const [schemaName, setSchemaName] = useState('');
    const [schemaVersion, setSchemaVersion] = useState('');
    const [schemaAttributes, setSchemaAttributes] = useState<string[]>([]);
    const [schemaCreated, setSchemaCreated] = useState(false);
    const [schemaError, setSchemaError] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (schemaCreated) {
            setTimeout(() => {
                setSchemaCreated(false);
            }, 3000);
        }
    }, [schemaCreated]);
    useEffect(() => {
        if (schemaError) {
            setTimeout(() => {
                setSchemaError('');
            }, 3000);
        }
    }, [schemaError]);

    //create a style in segment and set background color to white
    const schemaCreationForm = () => {

        return (
            <div className="ui center aligned" style={{ backgroundColor: "white" }} >
                <Segment style={{ width: '50%', margin: 'auto' }}>
                    <Grid columns={2} stretched>
                        <Grid.Column>
                            <Form>
                                <Form.Field>
                                    <label>Name:</label>
                                    <Input
                                        type="text"
                                        value={schemaName}
                                        onChange={(e) => setSchemaName(e.target.value)}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>Version:</label>
                                    <Input
                                        type="text"
                                        value={schemaVersion}
                                        onChange={(e) => setSchemaVersion(e.target.value)}
                                    />
                                </Form.Field>
                                {
                                    schemaAttributes.map((attribute, index) => {
                                        return (
                                            <Form.Field key={index}>
                                                <label>Attribute:</label>
                                                <Input
                                                    type="text"
                                                    value={attribute}
                                                    onChange={(e) => handleAttributeChange(e, index)}
                                                />
                                            </Form.Field>
                                        );
                                    })
                                }
                                <Button onClick={handleAddAttribute}>
                                    <Icon name="plus" />
                                    Add Attribute
                                </Button>
                                <Button
                                    onClick={handleCreateSchema}
                                    disabled={loading}
                                    loading={loading}
                                    type="submit"
                                >
                                    {loading ? 'Creating...' : 'Create schema'}
                                </Button>
                                {schemaCreated && <div>Schema created successfully!</div>}
                                {schemaError && <div>Error creating schema: {schemaError}</div>}
                            </Form>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        );
    };

    function handleAddAttribute() {
        // Add an empty attribute to the schemaAttributes array
        setSchemaAttributes([...schemaAttributes, '']);
    }

    function handleAttributeChange(event: React.ChangeEvent<HTMLInputElement>, index: number) {
        // Update the attribute at the given index with the new value
        const newAttributes = [...schemaAttributes];
        newAttributes[index] = event.target.value;
        setSchemaAttributes(
            newAttributes);
    }

    async function handleCreateSchema() {
        // Validate input
        if (!schemaName || !schemaVersion || !schemaAttributes) {
            setSchemaError('Please enter valid values for all fields');
            return;
        }
        const versionRegex = /^\d+\.\d+$/;

        if (!versionRegex.test(schemaVersion)) {
            // schemaVersion is not in the correct number format
            setSchemaError('Version must be in the format "X.Y", where X and Y are numbers');
            return;
        } else {
            // schemaVersion is in the correct number format
            setSchemaError('');
        }

        setLoading(true);

        const schema: SchemaSendRequest = {
            schema_name: schemaName,
            schema_version: schemaVersion,
            attributes: schemaAttributes,
        };

        try {
            // Create the schema
            await SchemaService.postSchemas(schema).then((response) => {
                console.log(response);
            });
            setSchemaCreated(true);
            setSchemaError('');
        } catch (err) {
            if (typeof err === 'object' && err !== null) {
                console.log(err.toString());
            } else {
                console.log('Unexpected error', err);
            }
        }

        setLoading(false);
    }

    return (
        schemaCreationForm()
    );
}

export default SchemaPage;