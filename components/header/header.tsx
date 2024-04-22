import classNames from 'classnames';
import type { ReactNode } from 'react';
import styles from './header.module.scss';

interface HeaderProps {
	type: 'h1' | 'h2' | 'h3' | 'h4';
	text: string | ReactNode;
	addClass?: string;
	hoverActive?: boolean;
}

const Header = ({
	type,
	text,
	addClass,
	hoverActive,
}: HeaderProps) => {
	let headerType: React.ReactNode;
	switch (type) {
		case 'h1':
			headerType = <h1>{text}</h1>;
			break;
		case 'h2':
			headerType = <h2>{text}</h2>;
			break;
		case 'h3':
			headerType = <h3>{text}</h3>;
			break;
		case 'h4':
			headerType = <h4>{text}</h4>;
			break;
	}

	return (
		<header
			className={classNames(
				styles.header,
				hoverActive && styles.hoverActive,
				addClass
			)}>
			{headerType}
		</header>
	);
};

export default Header;
