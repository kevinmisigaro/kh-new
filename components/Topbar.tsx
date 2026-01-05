'use client';

import { Avatar, Text, makeStyles, tokens } from '@fluentui/react-components';
import { useRouter } from 'next/navigation';

const useStyles = makeStyles({
    toolbar: {
        height: '6vh',
        background: tokens.colorBrandBackground,
    },
    toolbarContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    toolbarLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    toolbarItem: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    },
    logo: {
        height: '28px',
    }
});

const Topbar = () => {
    const styles = useStyles();
    const router = useRouter()

    return (
        <div className={styles.toolbar}>
            <div className={styles.toolbarContainer}>
                <div className={styles.toolbarLeft}>
                    <div className={styles.toolbarItem} onClick={() => router.push('/')}>
                        <img src="/logo.svg" alt="DataBalk Logo" className={styles.logo} />
                        <Text size={400} style={{ color: 'white' }}>
                            KlantHub
                        </Text>
                    </div>
                </div>
                <div>
                    <Avatar color="cranberry" initials="BR" />
                </div>
            </div>
        </div>
    );
};

export default Topbar;
 