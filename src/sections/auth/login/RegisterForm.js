import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, Box, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// ----------------------------------------------------------------------
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

// components
import Iconify from '../../../components/iconify';

export default function RegisterForm() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    navigate('/dashboard', { replace: true });
  };

  return (
    <>
      <Stack spacing={1.5}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <TextField name="text" placeholder={'الاسم الأول'} sx={{ minWidth: '48%' }} />
          <TextField name="text" placeholder={'اسم العائلة'} sx={{ minWidth: '48%' }} />
        </Box>
        <TextField name="email" placeholder={'البريد الإلكترونى'} sx={{ label: 'right' }} />
        <TextField
          name="password"
          placeholder={'كلمة السر'}
          type={showPassword ? 'text' : 'password'}
          // InputProps={{
          //   endAdornment: (
          //     <InputAdornment position="end">
          //       <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
          //         <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
          //       </IconButton>
          //     </InputAdornment>
          //   ),
          // }}
        />
        <TextField
          name="password"
          placeholder={'تأكيد كلمة السر'}
          type={showPassword ? 'text' : 'password'}
          // InputProps={{
          //   endAdornment: (
          //     <InputAdornment position="end">
          //       <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
          //         <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
          //       </IconButton>
          //     </InputAdornment>
          //   ),
          // }}
        />
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '-10px', width: '100%' }}
        >
          <TextField name="number" placeholder={'العمر'} sx={{ minWidth: '48%' }} />
          <FormControl sx={{ minWidth: '48%' }} size="medium">
            <InputLabel sx={{ direction: 'rtl' }} id="demo-select-small-label" placeholder={'النوع'}>
              النوع
            </InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              placeholder={'العمر'}
              onChange={handleChange}
            >
              {/* <MenuItem value="">
              <em>Select gender</em>
            </MenuItem> */}
              <MenuItem value={1}>ذكر</MenuItem>
              <MenuItem value={2}>أنثى</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextField name="number" placeholder={'رقم الجوال'} />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-evenly" sx={{ my: 2 }}>
        <Link variant="subtitle2" underline="hover">
          نسيت كلمة السر؟
        </Link>
        <Checkbox name="remember" label="Remember me" />
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        تسجيل
      </LoadingButton>
    </>
  );
}
