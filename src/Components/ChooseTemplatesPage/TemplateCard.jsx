import AspectRatio from '@mui/joy/AspectRatio';
import Button from '../General/Button/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import ExploreIcon from '@mui/icons-material/Explore';
import { format } from 'date-fns';
import style from './style.module.css';
import { useState } from 'react';
import ChooseTemplateModel from './ChooseTemplateModal';

export default function TemplateCard({ template }) {
    const [openModal, setOpen] = useState(false);

    return (
        <div>
            {
                openModal && <ChooseTemplateModel template={template} handleClose={() => setOpen(false)} />
            }
            <Card sx={{ width: 320 }}>
                <div>
                    <Typography level="title-lg">
                        {template.name}
                    </Typography>
                    <Typography level="body-sm">
                        {format(new Date(template.createdAt), 'LLLL d, yyyy')}
                    </Typography>
                    <IconButton
                        aria-label="bookmark Bahamas Islands"
                        variant="plain"
                        color="neutral"
                        size="sm"
                        sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                    >
                        <a target="_blank" rel="noopener noreferrer" href={`portfolio/${template.prototypePage}`}>
                            <ExploreIcon />
                        </a>
                    </IconButton>
                </div>
                <AspectRatio minHeight="120px" maxHeight="200px">
                    <img
                        src={template.imageUrl}
                        srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                        loading="lazy"
                        alt=""
                    />
                </AspectRatio>
                <CardContent orientation="horizontal" className={style.cardCont}>
                    <div>
                        <Typography level="body-xs">Total price:</Typography>
                        <Typography fontSize="lg" fontWeight="lg">
                            {template.price == 0 ? "Free" : template.price}
                        </Typography>
                    </div>
                    <div>
                        <Button
                            verticalPadding={6}
                            fontSize={15}
                            text="Get it"
                            justifyContent='center' onClick={() => setOpen(true)} />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}


