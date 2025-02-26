import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';

export default function ReferEarn() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ referrerName: '', referrerEmail: '', refereeName: '', refereeEmail: '', course: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    ['referrerName', 'referrerEmail', 'refereeName', 'refereeEmail', 'course'].forEach(field => {
      if (!formData[field]) newErrors[field] = 'This field is required';
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      handleClose();
    }
  };

  return (
    <section id='referEarn' className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
      <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">Refer & Earn</h1>
      <p className="text-lg mb-6 text-center max-w-lg">Refer a course to your friends and earn exciting rewards! Help them grow while you benefit.</p>
      <Button variant="contained" color="secondary" className="px-6 py-3 text-lg font-semibold shadow-md" onClick={handleOpen}>
        Refer Now
      </Button>

      <Dialog open={open} onClose={handleClose} className="backdrop-blur-md" maxWidth="sm" fullWidth>
        <DialogTitle className="bg-blue-500 text-white font-semibold text-center">Refer a Course</DialogTitle>
        <DialogContent className="bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-4">
            <TextField label="Your Name" name="referrerName" value={formData.referrerName} onChange={handleChange} error={!!errors.referrerName} helperText={errors.referrerName} fullWidth variant="outlined" />
            <TextField label="Your Email" name="referrerEmail" type="email" value={formData.referrerEmail} onChange={handleChange} error={!!errors.referrerEmail} helperText={errors.referrerEmail} fullWidth variant="outlined" />
            <TextField label="Friend's Name" name="refereeName" value={formData.refereeName} onChange={handleChange} error={!!errors.refereeName} helperText={errors.refereeName} fullWidth variant="outlined" />
            <TextField label="Friend's Email" name="refereeEmail" type="email" value={formData.refereeEmail} onChange={handleChange} error={!!errors.refereeEmail} helperText={errors.refereeEmail} fullWidth variant="outlined" />
            <TextField label="Course Name" name="course" value={formData.course} onChange={handleChange} error={!!errors.course} helperText={errors.course} fullWidth variant="outlined" />
            <TextField label="Message (Optional)" name="message" value={formData.message} onChange={handleChange} multiline rows={3} fullWidth variant="outlined" />
            <Button type="submit" variant="contained" color="primary" className="py-2 px-4 text-lg font-semibold">Submit</Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
