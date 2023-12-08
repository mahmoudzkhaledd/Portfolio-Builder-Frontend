import { Modal } from "@mui/material";
import { IconButton } from "@mui/joy";
import CloseIcon from '@mui/icons-material/Close';
const stl = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'var(--modal-color)',
    border: '1px solid #ebebeb',
    boxShadow: 24,
    padding: 15,
    width:"80%",
    maxWidth:"500px",
    maxHeight:"90vh",
    overflowY:"auto",
    borderRadius:10,
    flexDirection: "column",
};

export default function CustomModal({ children, onClose, title }) {
    return (
        <Modal
            open={true}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <div style={stl}>
                <div style={{ display: "flex", flexDirection: "row", columnGap: 10, justifyContent: 'space-between',alignItems:'center' }}>
                    <h5>
                        {title}
                    </h5>
                    <IconButton
                        aria-label="bookmark Bahamas Islands"
                        variant="plain"
                        color="neutral"
                        size="sm"
                        onClick={onClose}
                        className="icon-ext"
                    >
                        <CloseIcon />
                    </IconButton>
                </div>
                <br/>
                {children}


            </div>
        </Modal>
    )
}
