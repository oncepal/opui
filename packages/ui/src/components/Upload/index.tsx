/** @jsxImportSource @emotion/react */
import { ComponentBaseProps } from '../props';
import { useCSS, useTheme, useThemedCSS } from '../../styles/css';
import { Theme } from '../../styles/themes';

type UploadProps = ComponentBaseProps &
  Partial<{
    onlyImg?: boolean;
    className: string;
    children: React.ReactNode;
    onFileChange: (file: Blob, preview: string, e: React.ChangeEvent<HTMLInputElement>) => any;
  }>;

/**
 * Textarea component is a multi-line Input which allows you to write large texts.
 * @param ...
 */
const Upload = ({
  onlyImg,
  accept,
  onFileChange,
  children,
  css,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & UploadProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.target.files as FileList)[0];
    onFileChange?.(file, URL.createObjectURL(file), e);
  };
  const theme = useTheme();

  const styles = useCSS({
    cursor: ' pointer',
    ...useThemedCSS(theme, css),
  });

  return (
    <label css={styles} aria-label='file upload input'>
      <input
        accept={accept || (onlyImg ? 'image/png,image/jpeg,image/jpg' : '')}
        hidden
        type='file'
        onChange={handleFileChange}
        {...props}
      />
      {children}
    </label>
  );
};

export default Upload;
