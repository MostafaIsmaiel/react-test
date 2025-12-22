import React, {
    useEffect,
    useState,
    useCallback,
    type ReactNode,
    type MouseEvent,
} from 'react';

type NavigateOptions = {
    replace?: boolean;
    state?: any;
};

type NavigateFn = (to: string, options?: NavigateOptions) => void;

type RouteComponentProps = {
    navigate: NavigateFn;
    location: string;
};

export type Routes = {
    [path: string]: React.ComponentType<RouteComponentProps>;
};

export function SimpleRouter({ routes }: { routes: Routes }) {
    const [location, setLocation] = useState(window.location.pathname);

    useEffect(() => {
        const onPop = () => setLocation(window.location.pathname);
        window.addEventListener('popstate', onPop);
        return () => window.removeEventListener('popstate', onPop);
    }, []);

    const navigate: NavigateFn = useCallback(
        (to, { replace = false, state = null } = {}) => {
            if (replace) {
                window.history.replaceState(state, '', to);
            } else {
                window.history.pushState(state, '', to);
            }
            setLocation(window.location.pathname);
        },
        [],
    );

    const RouteComponent = routes[location] || routes['/404'];

    return <RouteComponent navigate={navigate} location={location} />;
}

type LinkProps = {
    to: string;
    children: ReactNode;
    replace?: boolean;
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
    className?: string;
};

export function Link({
    to,
    children,
    replace = false,
    onClick,
    className,
}: LinkProps) {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        if (e.ctrlKey) return;

        e.preventDefault();

        onClick?.(e);
        if (replace) window.history.replaceState(null, '', to);
        else window.history.pushState(null, '', to);

        window.dispatchEvent(new PopStateEvent('popstate'));
    };

    return (
        <a href={to} onClick={handleClick} className={className}>
            {children}
        </a>
    );
}
