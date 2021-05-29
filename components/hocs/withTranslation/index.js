import React from 'react';
import {useRouter} from "next/router";
import {I18n} from "react-polyglot";

const withTranslation = (WrappedComponent) => {
    const Component = ({translation, ...props}) => {
        const router = useRouter();
        const {lang} = router.query;
        
        return (
            <I18n locale={lang || 'tr'} messages={translation}>
                <WrappedComponent {...props} />
            </I18n>
        );
    };
    
    return Component;
};

export default withTranslation;