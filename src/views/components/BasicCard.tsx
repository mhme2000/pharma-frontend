import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface IBasicCardProps {
    description: string;
    note: string;
    unitaryValue: number;
}

export default function BasicCard({ description, note, unitaryValue }: IBasicCardProps) {
    return (
        <Card sx={{ minWidth: 200, maxWidth: 350 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {description}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {note}
                </Typography>
                <Typography variant="body2">
                    <strong>{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(unitaryValue)}</strong> (a cartela)
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'right', marginTop: -10 }}>
                <Button size="small">Adicionar ao carrinho</Button>
            </CardActions>
        </Card>
    );
}